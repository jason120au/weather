pipeline {
  agent {
    node {
      label 'WorkerNode'
    }

  }
  stages {
    stage('Setup Environment') {
      steps {
        sh '''. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc'''
      }
    }

    stage('Install deps') {
      steps {
        sh 'npm install --legacy-peer-deps'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

  }
  environment {
    CI = 'false'
  }
}