#include "rfid.h"
#include <cstdio>
#include <cstdlib>

void RFID::init(){
	cout<<"Creating pipe ";
    mkfifo("../rfid/rfid_pipe",0666);
    srand(NULL);

    cout<<"pipe created ..."<<endl;
}
int64_t RFID::readCard(){
    if(rand()%10 < 6)
        return -1;
    else
        return 1;

//    char buff[20];

//    int fd = open("../rfid/rfid_pipe",O_WRONLY);
//    assert(fd != -1 && "error opening");
//    cout<<"writing..."<<endl;
//    int bytes = write(fd,"GET",sizeof("GET"));
//    close(fd);
//    assert(bytes != -1 && "write successful");
//    cout<<"writing complete"<<endl;


//    fd = open("../rfid/rfid_pipe",O_RDONLY);
//    assert(fd != -1 && "error opening");
//    cout<<"reading..."<<endl;
//    bytes = read(fd,buff,12);
//    assert(bytes != -1 && "read successful");
//    buff[12]=0;
//    if(buff[0]=='F')return -1;
//    return atoll(buff);
//    close(fd);
}