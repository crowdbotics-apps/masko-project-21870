#!/bin/bash
ip=$(ifconfig en0 | grep 'inet ' | awk '{split($0,a," ");print a[2]'})
echo $ip