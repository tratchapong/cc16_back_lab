env 

PORT=

--------------

service api

path                method    authen      params      body
/auth/register      POST        0         none        { s_code, password, confirmPassword, firstname, email } 
/auth/login         POST        0         none        { t_code or s_code, password }
/auth/me            GET         t,s       none        none
/homework           POST        t         none        {question,startdate,duedate,published,subject_id,teacher_id }
/homework           GET         t         none        none
/homework           PUT         t         :id         {question,startdate,duedate,published,subject_id,teacher_id }
/subject            GET         0         none        none

