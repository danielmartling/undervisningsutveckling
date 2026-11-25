# undervisningsutveckling

## Requirements

.venv enviroment with atproto and dotenv.

## Usage

1. Move contents of this repo to a directory in `/opt`, eg. `/opt/undervisningsutveckling`.
2. Populate `.env` file.
3. Move/copy `undervisningsutveckling.service` and `undervisningsutveckling.timer` to `/etc/systemd/system`.
4. Reload systemd `sudo systemctl daemon-reload`.
5. Enable timer `sudo systemctl enable --now undervisningsutveckling.timer` and check `systemctl list-timers undervisningsutveckling.timer`.

To try it run `sudo systemctl start undervisningsutveckling.service` and review the log `journalctl -u undervisningsutveckling.service`.