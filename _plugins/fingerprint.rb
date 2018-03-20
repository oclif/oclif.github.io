# Inspired on: https://gist.github.com/yaroslav/a1acc36b49820474b4e0218c0ca8908d
#
# The original does not always work, since the asset files that were read to
# generate the fingerprint may not exist when the filter gets called.
#
# Instead, I'm using a rudimentary .timestamp text file to persist the timestamp
# (in seconds) and then use it to read the fingerprint.
require 'digest'

module Jekyll
  # Jekyll assets cachebuster filter
  #
  # Place this file into `_plugins`.
  module FingerprintFilter
    # Usage example:
    #
    # {{ "/style.css" | fingerprint }}
    # {{ "/style.css" | fingerprint | absolute_url }}
    def fingerprint(filename)
      "#{filename}?#{read_or_generate_timestamp}"
    end

    def read_or_generate_timestamp
      filename = '.timestamp'
      if File.exist?(filename)
        File.read(filename)
      else
        fingerprint = Time.now.to_i.to_s
        File.open(filename, 'w') { |file| file.write(fingerprint) }
        fingerprint
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::FingerprintFilter)
