import subprocess
import sys
import os
import time;
if __name__=="__main__":
    password=sys.argv[1];
    password_setting_string="user.password='{}'\n".format(password);
    password_confirm_string="user.password_confirmation='{}'\n".format(password)
    print(bytes(password_setting_string,'utf-8'))
    result=subprocess.Popen(["/bin/bash"], stdin=subprocess.PIPE, bufsize = 1)
    result.stdin.write(b"gitlab-rails console\n")
    result.stdin.write(b"user = User.find_by_username 'root'\n")
    result.stdin.write(bytes(password_setting_string,'utf-8'))
    result.stdin.write(bytes(password_confirm_string,'utf-8'))
    result.stdin.write(b'user.save!\n')
    result.stdin.write(b'exit\n');
    subprocess.run(["sleep","45"])
    time.sleep(45)
    while result.stdin.readlines().decode("utf-8").find("true")==-1:
          subprocess.run(["sleep","5"])# if currennt thread isn`t sleep 5 second ,then the current terminal will have a long duration
          time.sleep(5)
    os.remove(sys.argv[0])
