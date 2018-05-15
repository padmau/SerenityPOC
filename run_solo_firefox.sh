#!/bin/bash
driver_path=/usr/local/bin/geckodriver
sbt -Dbrowser=firefox -Dwebdriver.gecko.driver=${driver_path} 'test-only utils.SerenityPOCRunner'
