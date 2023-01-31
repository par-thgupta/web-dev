#include <bits/stdc++.h>
using namespace std;

void print(vector<int> v)
{
    for (auto i : v)
        cout << i << " ";
    cout << endl;
}
void sort(vector<int> &v)
{
    int n = v.size();
    for (int i = 0; i < n - 1; i++)
    {
        bool chk = 0;
        for (int j = 0; j < n - i - 1; j++)
        {
            if (v[j] > v[j + 1])
            {
                chk = 1;
                swap(v[j], v[j + 1]);
            }
        }
        if (chk == 0)
            break;
        print(v);
    }
}
int main()
{
    int n;
    cin >> n;
    vector<int> v;
    for (int i = 0; i < n; i++)
    {
        int x;
        cin >> x;
        v.push_back(x);
    }
    sort(v);
    print(v);
    return 0;
}