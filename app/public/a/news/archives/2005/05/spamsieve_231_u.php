<?php
  $redirect_url = "https://wincent.com/blog/spamsieve-2.3.1-updated-for-mac-os-x-10.4.1-tiger";
  header("HTTP/1.1 301 Moved Permanently");
  header("Location: $redirect_url");
  print <<<END
<html>
  <head>
    <title>301 Moved Permanently</title>
  </head>
  <body>
    <h1>Moved Permanently</h1>
    <p>The resource has moved to <a href="$redirect_url">$redirect_url</a></p>
  </body>
  <script type="text/javascript">
    window.location.replace('$redirect_url');
  </script>
</html>
END;
?>
