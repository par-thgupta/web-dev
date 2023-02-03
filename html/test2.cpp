#include <bits/stdc++.h>
using namespace std;
void call(string &s, int &n, int i, string help)
{
    if (i == n)
    {
        cout << help << " ";
        return;
    }
    call(s, n, i + 1, help + s[i]);
    call(s, n, i + 1, help);
}
int main()
{
    string s;
    cin >> s;
    int n = s.size();
    call(s, n, 0, "");
    return 0;
}