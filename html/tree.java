import java.util.*;
public class Main {
    static int c=0;
    static Scanner sc=new Scanner(System.in);
	public class Node{
		int data;
		Node left;
		Node right;
		Node(int data){
			this.data=data;
		}
	}
    public static void main(String args[]) {
		Main m=new Main();
		Node root=m.constructTree();
       if(ismirror(root)){
           System.out.println("YES");
       }
       else{
             System.out.println("NO");
       }
    }
    public static boolean ismirror(Node root){
        return ismirror(root,root);
    }
    public static boolean ismirror(Node root1,Node root2){
        if(root1==null && root2==null){
            return true;
        }
         if(root1.data==root2.data){
            boolean l=ismirror(root1.left,root2.right);
            boolean r=ismirror(root1.right,root2.left);
            return (l && r);
        }
        return false;
    }
	public  Node constructTree(){
		int r=sc.nextInt();
		Node root=new Node(r);
		Queue<Node> qq=new LinkedList<>();
		qq.add(root);
		while(!qq.isEmpty()){
			Node n=qq.poll();
			int lc=sc.nextInt();
			int rc=sc.nextInt();
			if(lc!=-1){
				Node lcn=new Node(lc);
				qq.add(lcn);
				n.left=lcn;
			}
			if(rc!=-1){
				Node rcn=new Node(rc);
				qq.add(rcn);
				n.right=rcn;
			}
		}
		return root;
	}
	public static void printlefn(Node root){
		if(root==null){
			return;
		}
		if(root.left==null && root.right==null){
			System.out.print(root.data+" ");
		}
		printlefn(root.left);
		printlefn(root.right);
	}
    public static void printrootToleaf(int k,Node r,int s,ArrayList<Integer> al){
			
			if(r==null){
				return;
			}
			if(r.left==null && r.right==null && s+r.data==k){
				al.add(r.data);
                c++;
				al.remove(al.size()-1);
			}
			if(s>k){
				return;
			}
			al.add(r.data);
			printrootToleaf(k,r.left,s+r.data,al);
			printrootToleaf(k,r.right,s+r.data,al);
			al.remove(al.size()-1);
		}

}