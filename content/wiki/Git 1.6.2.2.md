---
tags: git
---

# Official announcement

    The latest maintenance release GIT 1.6.2.2 is available at the
    usual places:

     http://www.kernel.org/pub/software/scm/git/

     git-1.6.2.2.tar.{gz,bz2}			(source tarball)
     git-htmldocs-1.6.2.2.tar.{gz,bz2}		(preformatted docs)
     git-manpages-1.6.2.2.tar.{gz,bz2}		(preformatted docs)

    The RPM binary packages for a few architectures are found in:

     RPMS/$arch/git-*-1.6.2.2-1.fc9.$arch.rpm	(RPM)

    Mostly documentation updates with a few bugfixes.

    ----------------------------------------------------------------

    GIT v1.6.2.2 Release Notes
    ==========================

    Fixes since v1.6.2.1
    --------------------

    * A longstanding confusing description of what --pickaxe option of
     git-diff does has been clarified in the documentation.

    * "git-blame -S" did not quite work near the commits that were given
     on the command line correctly.

    * "git diff --pickaxe-regexp" did not count overlapping matches
     correctly.

    * "git diff" did not feed files in work-tree representation to external
     diff and textconv.

    * "git-fetch" in a repository that was not cloned from anywhere said
     it cannot find 'origin', which was hard to understand for new people.

    * "git-format-patch --numbered-files --stdout" did not have to die of
     incompatible options; it now simply ignores --numbered-files as no files
     are produced anyway.

    * "git-ls-files --deleted" did not work well with GIT_DIR&GIT_WORK_TREE.

    * "git-read-tree A B C..." without -m option has been broken for a long
     time.

    * git-send-email ignored --in-reply-to when --no-thread was given.

    * 'git-submodule add' did not tolerate extra slashes and ./ in the path it
     accepted from the command line; it now is more lenient.

    * git-svn misbehaved when the project contained a path that began with
     two dashes.

    * import-zips script (in contrib) did not compute the common directory
     prefix correctly.

    * miscompilation of negated enum constants by old gcc (2.9) affected the
     codepaths to spawn subprocesses.

    Many small documentation updates are included as well.

    ----------------------------------------------------------------

    Changes since v1.6.2.1 are as follows:

    Allan Caffee (1):
         Documentation: update graph api example.

    Brandon Casey (1):
         git-branch: display "was sha1" on branch deletion rather than just "sha1"

    Carlo Marcelo Arenas Belon (1):
         documentation: update cvsimport description of "-r" for recent clone

    Daniel Barkalow (1):
         Give error when no remote is configured

    Daniel Cheng (aka SDiZ) (1):
         Fix bash completion in path with spaces

    David Aguilar (1):
         everyday: use the dashless form of git-init

    David J. Mellor (12):
         Documentation: minor grammatical fixes in git-archive.txt.
         Documentation: reword the "Description" section of git-bisect.txt.
         Documentation: minor grammatical fixes in git-blame.txt.
         Documentation: minor grammatical fixes in git-branch.txt.
         Documentation: reworded the "Description" section of git-bisect.txt.
         Documentation: reword example text in git-bisect.txt.
         Documentation: remove some uses of the passive voice in git-bisect.txt
         Documentation: minor grammatical fixes and rewording in git-bundle.txt
         Documentation: minor grammatical fixes in git-cat-file.txt
         Documentation: minor grammatical fixes in git-check-attr.txt
         Documentation: minor grammatical fix in git-check-ref-format.txt
         Documentation: Remove spurious uses of "you" in git-bisect.txt.

    Emil Sit (1):
         test-lib: Clean up comments and Makefile.

    Eric Wong (1):
         git-svn: fix ls-tree usage with dash-prefixed paths

    Holger Weiß (1):
         Documentation: Remove an odd "instead"

    Jeff King (3):
         doc: clarify how -S works
         ls-files: require worktree when --deleted is given
         fix portability problem with IS_RUN_COMMAND_ERR

    Johannes Schindelin (4):
         rsync transport: allow local paths, and fix tests
         Smudge the files fed to external diff and textconv
         import-zips: fix thinko
         mailmap: resurrect lower-casing of email addresses

    Johannes Sixt (2):
         Propagate --exec-path setting to external commands via GIT_EXEC_PATH
         diff --no-index: Do not generate patch output if other output is requested

    Junio C Hamano (6):
         read-tree A B C: do not create a bogus index and do not segfault
         Remove total confusion from git-fetch and git-push
         blame: read custom grafts given by -S before calling setup_revisions()
         Update draft release notes to 1.6.2.2
         Update draft release notes to 1.6.2.2
         GIT 1.6.2.2

    Linus Torvalds (1):
         close_sha1_file(): make it easier to diagnose errors

    Michael J Gruber (2):
         git submodule: Add test cases for git submodule add
         git submodule: Fix adding of submodules at paths with ./, .. and //

    Nico -telmich- Schottelius (1):
         git-tag(1): add hint about commit messages

    Nicolas Pitre (1):
         avoid possible overflow in delta size filtering computation

    René Scharfe (3):
         diffcore-pickaxe: use memmem()
         optimize compat/ memmem()
         pickaxe: count regex matches only once

    Shawn O. Pearce (1):
         Increase the size of the die/warning buffer to avoid truncation

    Stephen Boyd (1):
         format-patch: --numbered-files and --stdout aren't mutually exclusive

    Thomas Rast (4):
         send-email: respect in-reply-to regardless of threading
         send-email: test --no-thread --in-reply-to combination
         Documentation: format-patch --root clarifications
         bash completion: only show 'log --merge' if merging

# Update notes

As this release doesn't contain any bug fixes which impact my [Git](/wiki/Git) usage I won't be bothering with updating.