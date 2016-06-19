# illy-px
Illustrator extension to help with pixel art (work in progress!)

## Development

Disable signing checks:

```bash
$ defaults write com.adobe.CSXS.6 PlayerDebugMode 1
```

Symlink extension:

```bash
$ ln -s ~/github/mhulse/illy-px/ ~/Library/Application\ Support/Adobe/CEP/extensions/
```

Restart Illustrator.

Open extension via <kbd>Window</kbd> / <kbd>Extensions</kbd> / <kbd>PX</kbd>

Debug via Chrome: <http://localhost:8089>
