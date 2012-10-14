---
tags: git updates
---

Notes made while updating from [Git 1.6.1.2](/wiki/Git_1.6.1.2) to [Git 1.6.1.3](/wiki/Git_1.6.1.3) on [Mac OS X](/wiki/Mac_OS_X) [Leopard](/wiki/Leopard) 10.5.6:

    git fetch
    git tag -v v1.6.1.3

    # note: "git co" is an alias for "git checkout"
    git co v1.6.1.3
    make clean
    make prefix=/usr/local test
    sudo make prefix=/usr/local install
    cp contrib/completion/git-completion.bash ~/.git-completion.sh

    # now for the man pages
    wget http://www.kernel.org/pub/software/scm/git/git-manpages-1.6.1.3.tar.bz2
    sudo tar xjv -C /usr/local/man -f git-manpages-1.6.1.3.tar.bz2 