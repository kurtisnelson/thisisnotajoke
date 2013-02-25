---
layout: post
title: 'PulseAudio CLI'
tags:
  - command-line
  - linux
  - pulseaudio

---

On my systems, I always have audio control battles. At the end of the day, I want a single CLI command I can run to raise/lower volume, mute, and get current status. This way I can map these to keyboard buttons or perform them over SSH on all my machines consistantly. I've assembled these three scripts to do that. Note pa_vol_up and pa_vol_down should symlink to pvctl. The pulse audio sink being adjusted will have to be changed to meet your needs.

<script src="https://gist.github.com/3102332.js"> </script>
