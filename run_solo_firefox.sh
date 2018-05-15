#!/bin/bash
driver_path=/usr/bin/geckodriver
sbt -Dbrowser=firefox -Dwebdriver.gecko.driver=${driver_path} 'test-only utils.SerenityPOCRunner'
