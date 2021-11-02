#version 330 core
out vec4 FragColor;

in vec3 color;
in vec2 texCoords; // in out from vert

uniform sampler2D tex;

void main()
{
   FragColor = texture(tex, texCoords);
}