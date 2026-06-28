# Obsidian Notes Archiver
#### By: [Daniel Nazarian](https://www.danielnazarian.com) 🐧👹
##### Contact me at <dnaz@danielnazarian.com>

---

> ## ⚠️ DEPRECATED — do not use or maintain
>
> Note to self: **don't sink time into this repo.** It's an early, generic
> ancestor (`file-archiver`, `YYYY-MM-DD` filenames) that **never matched my
> actual `MM-DD-YYYY` daily notes** — it doesn't even work on my vault.
>
> The version I actually use is a **private** successor:
> **`dan1229/obsidian-todo-archiver`** (handles `MM-DD-YYYY`, daily *and* weekly
> notes). Go there instead.

---

A simple plugin for Obsidian that helps archive your daily notes into organized folders. Perfect for keeping your daily notes folder clean while maintaining an organized archive structure.

## Features

- Automatically archives notes with date-based filenames (YYYY-MM-DD format)
- Creates a clean year/month folder structure in your archive
- Simple one-click archiving through command palette
- Maintains original file names while organizing by date
- Zero configuration needed - works out of the box

## Installation

### From within Obsidian

1. Open Settings → Community plugins
2. Make sure Safe mode is off
3. Click Browse community plugins
4. Search for "Archiver"
5. Click Install
6. Once installed, close the community plugins window and activate the plugin

### Manual installation

1. Download the latest release from the [GitHub releases page](https://github.com/yourusername/obsidian-archiver/releases)
2. Extract the plugin folder from the zip to your vault's plugins folder: `<vault>/.obsidian/plugins/`
3. Reload Obsidian
4. Enable plugin in Settings → Community plugins

## Usage

1. Open any note with a date-based filename (e.g., "2024-03-21-meeting-notes.md")
2. Open the command palette (Cmd/Ctrl + P)
3. Search for "Archive Notes"
4. The note will be automatically moved to: `TODO/Daily/Archive/YYYY/MM/`

For example:
- A note named `2024-03-21-meeting-notes.md` will be moved to `TODO/Daily/Archive/2024/03/2024-03-21-meeting-notes.md`
- The plugin will create folders as needed

## Support

If you encounter any issues or have feature requests, please file them in the [GitHub issues page](https://github.com/dan1229/obsidian-notes-archiver/issues).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

-------------------------------------------------------

##### Copyright © [Daniel Nazarian](https://danielnazarian.com)

