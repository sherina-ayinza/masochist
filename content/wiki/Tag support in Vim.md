---
tags: vim tags
---

# Creating a tags file

Make sure [Exuberant Ctags](/wiki/Exuberant_Ctags) is installed (eg. `sudo yum install ctags` or similar, depending on your [OS](/wiki/OS)).

To actually create a tags file, for [Rails](/wiki/Rails) projects, run:

    :Rtags

(requires [Tim Pope's](/wiki/Tim_Pope%27s) [rails.vim](/wiki/rails.vim) plug-in).

# Jumping to a definition

Either in command mode:

    :tag foo

Or by hitting `Ctrl-]` over a keyword.

For cycling through matches we have:

-   `:tn` (next)
-   `:tp` (previous)
-   `:tf` (first)
-   `:tl` (last)
-   `:ts` (select from list)

For jumping back, `Ctrl-T` (or use `Ctrl-I`/`Ctrl-O` to move through the `:jump` list).

# Show all tags

    :tags

# External links

-   <http://robots.thoughtbot.com/post/159805638/integrating-vim-into-a-life>
-   <http://blog.bojica.com/2010/06/27/ctags-and-vim-for-ruby-on-rails-development>
