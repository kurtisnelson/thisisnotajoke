#!/bin/bash
docker run -v ${PWD}:/resume there4/markdown-resume md2resume html -t modern  resume.md source
