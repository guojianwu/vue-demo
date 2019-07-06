(function(win,doc){
    
        var fresh = function() {
            var html = doc.documentElement;
            var w = html.clientWidth;
            if(w<600){
                html.style.fontSize = (w/25) + 'px';
                document.getElementsByTagName('body')[0].width=(w/10)+'px';
            }else {
                html.style.fontSize = 18 + 'px';
                document.getElementsByTagName('body')[0].width=50+'px';
            }
    
        }
    
        if(document.readyState === "complete") {
            fresh();
        } else {
            document.addEventListener( "DOMContentLoaded", fresh, false );
        }
    
        win.addEventListener('resize' , fresh , false);
    
    })(window,document);