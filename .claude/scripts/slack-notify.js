#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '../../');

// .env.local → .env 순서로 로드 (OS 환경변수가 우선)
['.env.local', '.env'].forEach(file => {
  try {
    const content = fs.readFileSync(path.join(PROJECT_ROOT, file), 'utf8');
    content.split('\n').forEach(line => {
      line = line.trim();
      if (!line || line.startsWith('#')) return;
      const eqIdx = line.indexOf('=');
      if (eqIdx < 0) return;
      const key = line.substring(0, eqIdx).trim();
      let val = line.substring(eqIdx + 1).trim();
      const quotedMatch = val.match(/^(['"])(.*)\1$/);
      if (quotedMatch) val = quotedMatch[2];
      if (key && !process.env[key]) process.env[key] = val;
    });
  } catch (_) {}
});

const eventType = process.argv[2]; // 'Notification' | 'Stop'
const webhookUrl = process.env.SLACK_WEBHOOK_URL;

if (!webhookUrl || !eventType) process.exit(0);

let exited = false;
const safeExit = () => { if (!exited) { exited = true; process.exit(0); } };

let rawInput = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => { rawInput += chunk; });
process.stdin.on('end', () => {
  let data = {};
  try { if (rawInput.trim()) data = JSON.parse(rawInput); } catch (_) {}

  let blocks;

  if (eventType === 'Notification') {
    const msg = data.message || '(메시지 없음)';
    blocks = [
      { type: 'header', text: { type: 'plain_text', text: '🔔 Claude Code 알림', emoji: true } },
      { type: 'section', text: { type: 'mrkdwn', text: msg } },
      { type: 'divider' },
      { type: 'context', elements: [{ type: 'mrkdwn', text: 'Session: `' + (data.session_id || 'unknown').substring(0, 8) + '` | ' + new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }) }] }
    ];
  } else if (eventType === 'Stop') {
    if (data.stop_hook_active === true) { safeExit(); return; }
    blocks = [
      { type: 'header', text: { type: 'plain_text', text: '✅ Claude Code 작업 완료', emoji: true } },
      { type: 'context', elements: [{ type: 'mrkdwn', text: 'Session: `' + (data.session_id || 'unknown').substring(0, 8) + '` | ' + new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }) }] }
    ];
  }

  if (!blocks) { safeExit(); return; }

  const payload = JSON.stringify({ blocks });

  let parsedUrl;
  try { parsedUrl = new URL(webhookUrl); } catch (_) { safeExit(); return; }

  const options = {
    hostname: parsedUrl.hostname,
    path: parsedUrl.pathname + parsedUrl.search,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload, 'utf8')
    }
  };

  const req = https.request(options, (res) => { res.resume(); safeExit(); });
  req.on('error', safeExit);
  req.setTimeout(5000, () => { req.destroy(); safeExit(); });
  req.write(payload, 'utf8');
  req.end();
});
