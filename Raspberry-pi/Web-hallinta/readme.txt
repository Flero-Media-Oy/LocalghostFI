RPI hallinta etäkäyttöön. 

Lisää /etc/sudoers tiedostoon oikeus www-data:lle

www-data ALL=(root) NOPASSWD: /sbin/reboot

Myös jos ajat <RPI IP>/reboot.php. RPI käynnistyy uudelleen.

(c) Atte "Mixerboy24" Oksanen // LocalghostFI / github@fleromedia.fi
