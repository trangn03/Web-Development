# CSS Property
## Selector
**element Selector**
```css
p {
  text-align: center;
  color: red;
}
```

**id Selector**
```css
#para1 {
  text-align: center;
  color: red;
}
```

**class Selector**
```css
.center {
  text-align: center;
  color: red;
}
```

## Color
**background-color**: backgroud for HTML element
**color**: color of the text
**border**: color of borders (```border: 2px solid red```)
**color value**: rgb(255, 99, 71), ##ff6347, hsl(9, 100%, 64%)

## Backgrounds

**background-color**: background color of an element
**opacity**: transparent of an element (0.0-1.0)

transparency with RGBA
```css
div {
  background: rgba(0, 128, 0, 0.3) /* Green background with 30% opacity */
}
```
**background-image**: ```url("paper.gif");```

**background-repeat**:
- repeat-x: repeated horizontally
- repeat-y: repeated vertically
- no-repeat: showing the background image only once

**background-position**:
- left top
- left center
- left bottom
- right top
- right center
- right bottom
- center top
- center center (default)
- center bottom

**background-attachment**: should scroll or be fixed; 

## Borders
**border-style**:
- dotted - Defines a dotted border
- dashed - Defines a dashed border
- solid - Defines a solid border
- double - Defines a double border
- groove - Defines a 3D grooved border. The effect depends on the border-color value
- ridge - Defines a 3D ridged border. The effect depends on the border-color value
- inset - Defines a 3D inset border. The effect depends on the border-color value
- outset - Defines a 3D outset border. The effect depends on the border-color value
- none - Defines no border
- hidden - Defines a hidden border

**border-width**: width of four borders of specific size(in px, pt, cm, em, etc) or thin, medium or think
- can have one to four value (top, right, bottom, left)

**border-color**: set color of four borders
**border-sides**: 
```css
p {
  border-top-style: dotted;
  border-right-style: solid;
  border-bottom-style: dotted;
  border-left-style: solid;
}
```
**border-radius**: add rounded border to an element

## Margin
- margin-top
- margin-right
- margin-bottom
- margin-left

Properties
- auto: the browser calculates the margin
- length: specifies a margin in px, pt, cm, etc.
- %: specifies a margin in % of the width of the containing element
- inherit - specifies that the margin should be inherited from the parent element
