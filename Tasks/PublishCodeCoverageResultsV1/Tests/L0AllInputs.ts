import path = require('path');
import { TaskMockRunner } from 'azure-pipelines-task-lib/mock-run';
import * as answers from './answers';

const taskPath = path.join(__dirname, '..', 'publishcodecoverageresults.js');
const tr: TaskMockRunner = new TaskMockRunner(taskPath);

tr.setInput('codeCoverageTool', 'Cobertura');
tr.setInput('summaryFileLocation', '/user/admin/summary.xml');
tr.setInput('reportDirectory', '/user/admin/report');
tr.setInput('additionalCodeCoverageFiles', "/some/*pattern");

tr.setAnswers(answers.defaultAnswers);

tr.run();
