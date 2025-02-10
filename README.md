# Desktop Screenshot Action

This action screenshots the current desktop and saves it to the specified file on the runner.

Uses [screenshot-desktop](https://github.com/bencevans/screenshot-desktop).

Supports Windows and macOS runners, Linux support currently requires imagemagick (see screenshot-desktop).

## Inputs

### file-name

The name of the screenshot jpg to upload. Default `"screenshot.jpg"`.

## Example usage

```
- uses: NinjaManatee/desktop-screenshot-action@0.1
  with:
    file-name: 'desktop.jpg'
```

NOTE: This was forked from [OrbitalOwen/desktop-screenshot-action](https://github.com/OrbitalOwen/desktop-screenshot-action)