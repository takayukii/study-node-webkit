module.exports = function (grunt) {
    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        browserify : {  // タスク名. $ grunt browserify で実行できる
            dist : {
                src : 'js/main.js',  // エントリーポイントとなるファイル
                dest : 'bundle.js'  // 出力するファイル名
            }
        },
        watch : {  // タスク名. $ grunt watch で実行できる
            scripts : {
                files : ['js/*.js'],  // 監視対象のファイル
                tasks : ['browserify']  // 変更があったら呼ばれるタスク
            }
        }
    });

    // grunt関連のプラグインはpackage.jsonに記述されたものを読み込む
    Object.keys(pkg.devDependencies).forEach(function (devDependency) {
        if (devDependency.match(/^grunt\-/)) {
            grunt.loadNpmTasks(devDependency);
        }
    });

    // $ grunt で実行するタスクに watch を指定
    grunt.registerTask('default', ['watch']);
};