# week-bot

## Requirements

.venv enviroment with atproto and dotenv

## Usage

1. Move contents of this repo to a directory in `/opt`, eg. `/opt/week-bot`
2. Populate `.env` file
3. Move/copy `week-bot.service` and `week-bot.timer` to `/etc/systemd/system`
4. Reload systemd `sudo systemctl daemon-reload`
5. Enable timer `sudo systemctl enable --now week-bot.timer` and check `systemctl list-timers week-bot.timer`

To try it run `sudo systemctl start week-bot.service` and review the log `journalctl -u week-bot.service`