Console.WriteLine(isHappy(94));

bool isHappy(int n)
{
    List<int> list = new();
    int k;
    //int times = 0;
    while (true)
    {
        k = n;
        int sum = 0;
        //writeLine(++times);
        while(n / 10 != 0){
            sum += (int) Math.Pow(n % 10, 2);
            n /= 10;
        }
        sum += (int) Math.Pow(n % 10, 2);
        //WriteLine(sum);
        if(sum == 1) return true;
        
        if(list.Contains(k)){
            return false;
        }else{
            list.Add(k);
        }
        n = sum;
        // WriteLine(n);
        // foreach(var i in list){
        //     WriteLine(i);
        // }
    }
}