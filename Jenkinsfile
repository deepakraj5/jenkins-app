pipeline {

	agent any
	
	stages {
	
		
		stage('restart the pm2 server') {
			steps {
				sh "pm2 start index.js --name app"
			}
		}


	}

}
