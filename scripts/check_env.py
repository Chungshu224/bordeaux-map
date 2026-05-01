import os
for k in ['ANTHROPIC_API_KEY', 'CLAUDE_API_KEY']:
    v = os.environ.get(k, '')
    if v:
        print(f'{k}: SET ({v[:8]}...)')
    else:
        print(f'{k}: NOT SET')
