# TBD Bouldering Application
This is a placeholder app for actually getting some content.  Also a plan.   A plan would be solid.

## Tech 
Ansible, GoLang, Typescript, SCSS

## Developer setup
Setup requires either getting GoLang and NPM setup on a box (recommended).   HomeBrew helps with npm, and some pythong stuff

Or getting Oracle VirtualBox, and ansible working on command line
* Setup virtualenv for your python http://sourabhbajaj.com/mac-setup/Python/virtualenv.html
* Install ansible with the virtual env or https://hvops.com/articles/ansible-mac-osx/
```
    $virtualenv -p python3 env; 
    $source env/bin/activiate
    $pip install ansible 
```
* Install VirtualBox https://www.virtualbox.org/

### Setup the server with Vagrant 
Then on command line you just run $vagrant up and it will install a server with build tools, and eventually a running GoLang service.

I still need to make the build script actually install and run the server, so for now just running gulp in the VM, or in the project root
will get it all started.
