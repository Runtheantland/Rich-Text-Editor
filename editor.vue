<style lang="less" >
  .box {
    border: 1px solid #ddd;
    width: 90%;
    margin: 0;
    position: relative;
    min-height: 400px;
    border-radius:5px;

  }

  .header {
    width: 100%;
    height: 42px;
    line-height: 40px;
    background: #EEEEEE;
    div{display: inline}
  }

  .rd {
    color: red;
  }

  #color {
    width: 110px;
    height: 60px;
    position: absolute;
    top: 40px;
    border: 1px solid #ddd;
  }

  .colorbtn {
    width: 16px;
    height: 16px;
    border: none;
    float: left;
    margin: 4px 0 0 4px;
  }

  #editor img {
   max-width:400px
  }

  #editor {
    width: 100%;
    min-height: 352px;
    margin-top: 6px;
    display:block
  }
  .btn-default{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #bfcbd9;
    border-color: #c4c4c4;
    color: #1f2d3d;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding:5px 10px;
    font-size: 14px;
    border-radius: 4px;
    margin:5px;
    &.active{background:#20a0ff;color:#fff}
    &.active:hover{color:#fff}
  }
  .btn-default:hover{color: #20a0ff;border-color: #20a0ff;}
  .Btns {
    -webkit-transform: scale(0.8);
  }
  .form-control{background: #fff}
</style>
<template>
  <div class="box">
    <!--<div class="form-control" id="color" v-show="color">-->
      <!--<button class="colorbtn Btns" name="ForeColor|red" @click="Style($event)"></button>-->
      <!--<button class="colorbtn Btns" name="foreColor|#e28b41" @click="Style($event)"></button>-->
      <!--<button class="colorbtn Btns" name="foreColor|#c8a732" @click="Style($event)"></button>-->
      <!--<button class="colorbtn Btns" name="foreColor|#209361" @click="Style($event)"></button>-->
      <!--<button class="colorbtn Btns" name="foreColor|#418caf" @click="Style($event)"></button>-->
      <!--<button class="colorbtn Btns" name="foreColor|#aa8773" @click="Style($event)"></button>-->
      <!--<button class="colorbtn Btns" name="foreColor|#999999" @click="Style($event)"></button>-->
      <!--<button class="colorbtn Btns" name="foreColor|#333333" @click="Style($event)"></button>-->
    <!--</div>-->
    <div class="header">
      <!--&lt;!&ndash;<div class="Btns btn btn-default" name="color" @click="showColor">颜色</div>&ndash;&gt;-->
      <!--<div class="Btns btn btn-default tion" name="bold|null" @click="Style($event)">粗体</div>-->
      <!--<div class="Btns btn btn-default" name="indent|null" @click="Style($event)">缩进</div>-->
      <!--<div class="Btns btn btn-default" name="copy|null" @click="Style($event)">复制</div>-->
      <!--<div class="Btns btn btn-default" name="cut|null" @click="Style($event)">剪切</div>-->
      <!--<div class="Btns btn btn-default" name="delete|null" @click="Style($event)">删除</div>-->
      <!--<div class="Btns btn btn-default" name="undo|null" @click="Style($event)">退回</div>-->
      <!--<div class="Btns btn btn-default tion" name="underline|null" @click="Style($event)">下划线</div>-->
      <!--<div class="Btns btn btn-default" name="removeFormat|null" @click="Style($event)">删除样式</div>-->
      <select name="fontSize" class="form-control Btns" v-model="size" @change="font()" id="selects" style="width:60px;display:inline-block">
        <option value="1">Size1</option>
        <option value="2">Size2</option>
        <option value="3" selected>Size3</option>
        <option value="4">Size4</option>
        <option value="5">Size5</option>
        <option value="6">Size6</option>
        <option value="7">Size7</option>
      </select>
      <upload :upload-src.sync="url" :upload-type="'png'" :upload-size="[0,200]" :upload-wh="[25,256]" id="updata" :editer="true"></upload>
    </div>
    <div id="editor">
    {{content}}
    </div>
  </div>


</template>
<script>
  var $ = require('jquery');
  import upload from '~components/common/upload.vue'
  export default {
    props: ['htmlvalue'],
    mounted: function() {
      var vm = this;
      vm.openOrCloseEditor("editor", "true"); //开启元素编辑
      document.getElementById("editor").focus(); //获取焦点
//      vm.bgColor();
    },
    computed:{
      content:function(){
        return this.htmlvalue
      }
    },
    data: function() { //返回参数
      return {
        color: '',
        size: '3',
        url:''
      }
    },
    components: {
      upload: upload

    },
    methods: {
      openOrCloseEditor: function(el, operate) {
        var editor = document.getElementById(el);
        editor.contentEditable = operate;
      },
//      bgColor: function() {
//        var coLength = $(".colorbtn").length;
//        for(var i of $(".colorbtn")) {
//          var name = i.getAttribute("name"),
//            name_1 = name.split("|"),
//            name_3 = name_1[1];
//          i.style.background = '' + name_3 + '';
//        }
//      },
//      showColor: function() {
//        var vm = this;
//        vm.color = true;
//      },
      Style: function(e) {
        var vm = this;
        vm.color = false;
        var classname = $(e.target).attr("class");
        if(classname.indexOf("active") > -1) {
          $(e.target).removeClass("active");
        } else if(classname.indexOf("tion") > -1) {
          $(e.target).addClass("active");
        }
        var name = $(e.target).attr("name"),
          name_1 = name.split("|"),
          name_2 = name_1[0],
          name_3 = name_1[1];
        document.execCommand('' + name_2 + '', false, '' + name_3 + '');
      },
      font: function() {
        var vm = this;
        document.execCommand('fontSize', false, '' + vm.size + '');
      },
      con : function () {
        return $('#editor').html();
      }
    }
  }
</script>

