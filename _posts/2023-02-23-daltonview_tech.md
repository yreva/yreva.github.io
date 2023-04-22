---
layout: post
title: "DaltonView - Technical Notes"
categories: Software
---
DaltonView is a simple one-file application script which can be used to display and export TD-DFT data from raw output files. This program spawned mostly out of convenience toward my own work, making it simple to generate an absorption spectrum for a molecule, modify the parameters of the spectrum in real-time, and easily export to a CSV for use in Matlab, IGOR, etc. It is important to note that the spectra is normalized to the strongest absorption band, so all information related to absolute oscillator strength is gone.

The current options include...

Lineshape: Lorentzian or Gaussian

The Lorentzian function will give you sharper peaks, at the cost of slightly long tailing off each peak. This one is best for spectra with convoluted absorption bands. The Gaussian function gives more realistic blob-like absorption bands.

Peak Width:

This option sets the half-width at half-maximum for each absorption peak.


If you are interested in trying it out, a executable (.exe) version is available for download: download

The source code is also available on GitHub: [download](https://u.pcloud.link/publink/show?code=XZ8ooMVZ9qKfqD3K530tMbe4TPBDIBSbmdNV)

https://github.com/daltonian/DaltonView

If you ever run into any glitches/bugs/errors, feedback would be much appreciated. Posting an issue to the Github repository would be most effect. Alternatively, send details to info@daltonian.co and I will work toward making updates.
