# Home Automation

Some fun home automation projects

## Getting Started

```
git clone https://github.com/bberak/home-automation.git
cd home-automation 
npm run setup
npm run build
npm run serve
```

## Prequisites

### Enabling IR

In order to send and receive IR signals using your Raspberry PI, add the following to `/boot/config.txt`:

```
dtoverlay=gpio-ir,gpio_pin=17
dtoverlay=gpio-ir-tx,gpio_pin=18
```

> Make sure you hook your IR receiver up to **GPIO 17** and your IR transmiter up to **GPIO 18**