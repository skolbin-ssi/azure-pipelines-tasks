import assert = require('assert');
import path = require('path');
import os = require('os');
import process = require('process');
import fs = require('fs');

import * as ttm from 'azure-pipelines-task-lib/mock-test';

describe('JavaToolInstaller L0 Suite', function () {
    it('should fail when JavaToolInstaller is run with no azure server endpoint', function () {
        this.timeout(20000);

        const testPath: string = path.join(__dirname, 'L0FailsIfNoAzureEndpointSet.js');
        const testRunner: ttm.MockTestRunner = new ttm.MockTestRunner(testPath);

        testRunner.run();

        assert(testRunner.failed, 'task should have failed');
    });

    it('should run successfully when fetching JDK files from azure storage', function () {
        this.timeout(20000);

        const testPath: string = path.join(__dirname, 'L0DownloadArtifactsFromAzureStorage.js');
        const testRunner: ttm.MockTestRunner = new ttm.MockTestRunner(testPath);

        testRunner.run();

        assert(testRunner.succeeded, 'task should have succeeded.');
    });

    it('should fail when JavaToolInstaller is run with to destination folder specified', function () {
        this.timeout(20000);

        const testPath: string = path.join(__dirname, 'L0NoDestinationFolder.js');
        const testRunner: ttm.MockTestRunner = new ttm.MockTestRunner(testPath);

        testRunner.run();

        assert(testRunner.failed, 'task should have failed');
    });
});
