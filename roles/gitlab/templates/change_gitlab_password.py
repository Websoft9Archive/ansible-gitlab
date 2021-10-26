import subprocess
import sys
import os
if __name__=="__main__":
    password=sys.argv[1];
    password_setting_string="user.password='{}'\n".format(password);
    password_confirm_string="user.password_confirmation='{}'\n".format(password)
    print(bytes(password_setting_string,'utf-8'))
    result=subprocess.Popen(["/bin/bash"], stdin=subprocess.PIPE, bufsize = 1)
    is_finish=False;
    while is_finish==False:
      result.stdin.write(b"gitlab-rails console\n")
      result.stdin.write(b"user = User.find_by_username 'root'\n")
      result.stdin.write(bytes(password_setting_string,'utf-8'))
      result.stdin.write(bytes(password_confirm_string,'utf-8'))
      result.stdin.write(b'user.save!\n')
      result.stdin.write(b'exit\n');
      is_finish=True;


    os.remove(sys.argv[0])
