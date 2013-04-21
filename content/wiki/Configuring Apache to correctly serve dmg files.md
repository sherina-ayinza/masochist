---
tags: apache dmg mime
---

Without appropriate configuration you may find that your [Apache](/wiki/Apache) [webserver](/wiki/webserver) delivers [dmg](/wiki/dmg) files to users as text in their browser windows rather than downloading them as binary files.

To avoid this you need to add `dmg` to the appropriate line in your `mime.types` file.

For example, in my [RHEL 5.1](/wiki/RHEL_5.1) server I needed a line like the following in `/etc/mime.types`:

    application/octet-stream	bin dms lha lzh exe class so dll img iso dmg

`application/octet-stream` is the right type, as confirmed by inspecting the corresponding settings provided by [Apple](/wiki/Apple) in [Mac OS X](/wiki/Mac_OS_X) (in `/private/etc/apache2/mime.types`):

    application/octet-stream bin dms lha lzh class so iso dmg dist distz pkg bpk dump elc scpt

For good measure, after making the change I did a `sudo apachectl graceful` to ensure that [Apache](/wiki/Apache) picked up the changes.