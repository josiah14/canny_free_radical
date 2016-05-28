# Environment Initialization
*This is tested on Ubuntu and OSX: El Capitan; it probably works on NixOS.  This is expected to work on other recent
versions of OSX (such as Yosemite and Mavricks), but is not tested - YMMV.*

- If you don't have the Nix Package Manager, install it via `curl https://nixos.org/nix/install | sh`
- `cd /path/to/canny_free_radical`
- `nix-shell .` -- The first time you run this, especially on OSX, it might take a while.  Subsequent instantiation of the environment should be instantaneous unless new dependencies have been added since the last instantiation.
- `bundle install --path vendor/bundle && bundle update`
- `bundle exec rake db:create db:migrate db:seed`
- `npm i bower`
- `bundle exec rake bower:install` -- If prompted, select the latest version of AngularJS (1.5.5 as of this writing)
- `bundle exec rails s`
