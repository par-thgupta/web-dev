#include <bits/stdc++.h>
using namespace std;
void call(string s,int n,string help){
    if(help.size() == n){
        cout<<help<<" ";
        return ;
    }
    for(int j=0;j<s.size();j++){
        string x = s;
        s=s.substr(0,j) + s.substr(j+1,s.size());
        call(s,n,help+x[j]);
        s = x;    
    }
}
int main(){
    string s;cin>>s;
    int n = s.size();
    string help = "";
    call(s,n,help);
return 0;
}