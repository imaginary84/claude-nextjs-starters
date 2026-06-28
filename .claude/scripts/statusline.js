#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

let raw = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => { raw += chunk; });
process.stdin.on('end', () => {
  let data = {};
  try { data = JSON.parse(raw); } catch (_) {}

  // const rootDir = path.resolve(__dirname, '../..');
  // fs.writeFileSync(path.join(rootDir, 'Status.json'), JSON.stringify(data, null, 2));

  const model = data?.model?.display_name ?? '?';
  const ctx = Math.floor(data?.context_window?.used_percentage ?? 0);
  const use = Math.floor(data?.rate_limits?.five_hour?.used_percentage ?? 0);

  process.stdout.write(`🤖 ${model} | 📋 ${ctx}% context | ⚡ ${use}% 5-usage\n`);
});
