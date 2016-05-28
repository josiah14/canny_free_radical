with import <nixpkgs> {}; {
  cannyFreeRadicalEnv = stdenv.mkDerivation rec {
    name = "canny-free-radical-env";
    version = "0.1";
    src = ./.;
    buildInputs = [
        stdenv
        libyaml
        libxml2
        libxslt
	libiconv
        ruby_2_3
        bundler
        zlib
        postgresql94
        sqlite
        zsh
        git
        nodejs-6_x
        heroku
    ];
  };
}
