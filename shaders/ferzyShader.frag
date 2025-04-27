#pragma header

uniform float force;

void main() {
    vec2 uv = openfl_TextureCoordv.xy;
    vec3 col;

    col.r = texture2D(bitmap, vec2(uv.x + (force / 70.0), uv.y)).r;
    col.g = texture2D(bitmap, uv).g;
    col.b = texture2D(bitmap, vec2(uv.x - (force / 70.0), uv.y)).b;

    gl_FragColor = vec4(col, texture2D(bitmap, uv).a);
}

// Shader and Lua script for it is By Ferzy