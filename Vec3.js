const Vec3 = (function(){
        function vec(x,y,z){
            return {
                x:x,
                y:y,
                z:z,
                
                toString:function(){
                    return 'Vector: ['+this.x+','+this.y+','+this.z+']'
                }
            };
        }
        const Sqrt = Math.sqrt;
        return {
            Vector:vec,
            Create:vec,
            
            Print:function(a){
                println(a.toString());
            },
            
            Add:function(a,b){
                return vec(a.x+b.x,a.y+b.y,a.z+b.z);
            },
            Sub:function(a,b){
                return vec(a.x-b.x,a.y-b.y,a.z-b.z);
            },
            Mult:function(a,b){
                return vec(a.x*b.x,a.y*b.y,a.z*b.z);
            },
            Div:function(a,b){
                return vec(a.x/b.x,a.y/b.y,a.z/b.z);
            },
            
            Equals:function(a,b){
                return a.x===b.x&&a.y===b.x&&a.z===b.z;
            },
            Constrain:function(A,min,max){
                let a = this.Copy(A);
                
                if (a.x<min){
                    a.x=min;
                }
                if (a.x>max){
                    a.x=max;
                }
                
                if (a.y<min){
                    a.y=min;
                }
                if (a.y>max){
                    a.y=max;
                }
                
                if (a.z<min){
                    a.z=min;
                }
                if (a.z>max){
                    a.z=max;
                }
                
                return a;
            },
            
            Dist:function(a,b){
                let abx = (b.x-a.x);
                let aby = (b.y-a.y);
                let abz = (b.z-a.z);
                return Sqrt(abx*abx+aby*aby+abz*abz);
            },
            DistSq:function(a,b){
                let abx = (b.x-a.x);
                let aby = (b.y-a.y);
                let abz = (b.z-a.z);
                return abx*abx+aby*aby+abz*abz;
            },
            
            Copy:function(a){
                return vec3(a.x,a.y,a.z);
            },
            Zero:function(){
                return vec(0,0,0);
            },
            
            Dot:function(a,b){
                return a.x*b.x+a.y*b.y+a.z*b.z;
            },
            Cross:function(a,b){
                return vec(
                    a.y*b.z-a.z*b.y,
                    a.z*b.x-a.x*b.z,
                    a.x*b.y-a.y*b.x
                );
            },
            Length:function(a){
                return Sqrt(a.x*a.x+a.y*a.y+a.z*a.z);
            },
            Normalize:function(A){
                let a = this.Copy(A);
                let l = 1/Sqrt(a.x*a.x+a.y*a.y+a.z*a.z);
                if (l>0&&l!=1){
                    a.x*=l;
                    a.y*=l;
                    a.z*=l;
                }
                return a;
            },
            
            Scale:function(A,b){
                let a = this.Copy(A);
                
                a.x*=b;
                a.y*=b;
                a.z*=b;
                
                return a;
            },
            TransformCoords:function(a,b){
                let x = a.x*b.m[0]+a.y*b.m[4]+a.z*b.m[8]+b.m[12];
                let y = a.x*b.m[1]+a.y*b.m[5]+a.z*b.m[9]+b.m[13];
                let z = a.x*b.m[2]+a.y*b.m[6]+a.z*b.m[10]+b.m[14];
                let w = a.x*b.m[3]+a.y*b.m[7]+a.z*b.m[11]+b.m[15];
                w = 1/w;
                return vec(x*w,y*w,z*w); 
            },
            TransformNormal:function(a,b){
                let x = a.x*b.m[0]+a.y*b.m[4]+a.z*b.m[8];
                let y = a.x*b.m[1]+a.y*b.m[5]+a.z*b.m[9];
                let z = a.x*b.m[2]+a.y*b.m[6]+a.z*b.m[10];
                return vec3(x,y,z);
            },
        };
    })();
