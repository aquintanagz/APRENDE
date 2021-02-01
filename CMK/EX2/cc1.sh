#c++ --std=c++11 c2.cpp  \
#-I/opt/mongo-cxx-driver/include/mongocxx/v_noabi -I/usr/local/Cellar/mongo-c-driver/1.17.3/include/libmongoc-1.0  \
#-I/opt/mongo-cxx-driver/include/bsoncxx/v_noabi  -I/usr/local/Cellar/mongo-c-driver/1.17.3/include/libbson-1.0    \
#-L/opt/mongo-cxx-driver/lib -lmongocxx._noabi -lbsoncxx._noabi

#c++ --std=c++11 c2.cpp $(pkg-config --cflags --libs libmongocxx)


#c++ --std=c++11 c2.cpp  \
#-I/opt/mongo-cxx-driver/include/mongocxx/v_noabi -I/usr/local/Cellar/mongo-c-driver/1.17.3/include/libmongoc-1.0  \
#-I/opt/mongo-cxx-driver/include/bsoncxx/v_noabi  -I/usr/local/Cellar/mongo-c-driver/1.17.3/include/libbson-1.0    \
#-L/opt/mongo-cxx-driver/lib -lmongocxx -lbsoncxx

#c++ --std=c++11 c2.cpp $(pkg-config --cflags --libs libmongocxx)

c++ --std=c++11 c2.cpp -o c2 \
-I/opt/mongo-cxx-driver/include/mongocxx/v_noabi -I/usr/local/include/libmongoc-1.0 \
-I/opt/mongo-cxx-driver/include/bsoncxx/v_noabi  -I/usr/local/include/libbson-1.0   \
-L/opt/mongo-cxx-driver/lib/ -lmongocxx -lbsoncxx

#export LD_LIBRARY_PATH=/usr/local/lib64:$LD_LIBRARY_PATH
#export LD_LIBRARY_PATH=/usr/local/lib:$LD_LIBRARY_PATH
#export LD_LIBRARY_PATH=/opt/mongo-cxx-driver/lib:$LD_LIBRARY_PATH