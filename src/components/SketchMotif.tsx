import type { VisualMotif } from '../data/visualMotifs';

type SketchMotifProps = {
  motif: VisualMotif;
};

function DraftingGround() {
  return (
    <g className="sketch-drafting-ground" aria-hidden="true">
      <path className="sketch-line sketch-fine" d="M52 206 C111 218 237 218 312 204" />
      <path className="sketch-line sketch-fine" d="M74 56 L74 205" />
      <path className="sketch-line sketch-fine" d="M286 48 L286 204" />
      <path className="sketch-line sketch-wash-line" d="M64 72 C132 52 227 54 296 74" />
    </g>
  );
}

function HeroWaterVessel() {
  return (
    <>
      <path className="sketch-fill sketch-fill-water" d="M76 142 C118 132 156 154 202 142 C238 132 268 138 306 126 L306 177 C226 196 151 182 76 194 Z" />
      <path className="sketch-fill sketch-fill-wash" d="M116 186 C148 170 216 171 251 186 C219 203 149 204 116 186 Z" />
      <path className="sketch-line sketch-waterline motion-drift" d="M58 135 C96 124 127 146 168 135 C207 123 245 144 304 130" />
      <path className="sketch-line sketch-waterline motion-drift" d="M82 151 C122 143 156 158 195 149 C235 141 267 151 302 143" />
      <path className="sketch-line sketch-vessel" d="M135 68 C124 94 114 123 118 166 C126 197 239 196 248 166 C252 120 238 88 225 66 C198 79 164 81 135 68 Z" />
      <path className="sketch-line sketch-vessel-detail" d="M134 70 C158 58 202 58 226 68" />
      <path className="sketch-line sketch-vessel-detail" d="M146 90 C168 101 197 100 219 89" />
      <path className="sketch-line sketch-vessel-detail" d="M136 119 C160 132 207 132 230 119" />
      <path className="sketch-line sketch-vessel-detail" d="M128 145 C158 158 212 158 241 144" />
      <path className="sketch-line sketch-fine" d="M151 80 C145 108 143 139 149 168" />
      <path className="sketch-line sketch-fine" d="M220 80 C226 109 228 139 221 169" />
      <path className="sketch-line sketch-shadow" d="M126 174 C154 186 213 187 242 173" />
      <path className="sketch-fill sketch-stone" d="M78 158 C89 137 115 135 126 153 C137 172 111 190 91 185 C73 181 69 171 78 158 Z" />
      <path className="sketch-line sketch-hatch" d="M87 160 C99 154 112 155 123 164" />
      <path className="sketch-line sketch-hatch" d="M93 175 C104 168 114 169 122 176" />
      <path className="sketch-line sketch-hatch" d="M84 166 L124 150" />
      <path className="sketch-line sketch-root" d="M111 186 C120 193 135 195 151 193" />
      <path className="sketch-line sketch-bronze" d="M238 72 C251 105 258 137 253 171" />
      <path className="sketch-line sketch-material" d="M265 171 C279 160 291 154 306 151" />
      <path className="sketch-line sketch-tech" d="M272 65 L302 65 L302 95" />
      <circle className="sketch-node motion-pulse-subtle" cx="286" cy="82" r="5" />
      <path className="sketch-line sketch-tech" d="M253 103 C266 93 274 87 286 82" />
      <circle className="sketch-node" cx="259" cy="104" r="3" />
    </>
  );
}

function HeritageAquarium() {
  return (
    <>
      <path className="sketch-fill sketch-fill-wash" d="M102 76 C140 52 215 53 251 78 C237 98 218 107 176 108 C135 108 115 97 102 76 Z" />
      <path className="sketch-fill sketch-fill-water" d="M119 120 C151 112 181 128 211 119 C228 115 241 116 253 120 L246 153 C205 165 156 164 119 153 Z" />
      <path className="sketch-line sketch-vessel" d="M102 76 C113 110 116 145 123 179 C140 199 219 199 237 178 C243 145 241 109 251 78" />
      <path className="sketch-line sketch-vessel-detail" d="M114 78 C140 62 213 63 249 78" />
      <path className="sketch-line sketch-vessel-detail" d="M132 89 C158 99 196 100 224 90" />
      <path className="sketch-line sketch-waterline motion-drift" d="M121 121 C151 112 178 128 207 119 C225 114 239 116 252 120" />
      <path className="sketch-line sketch-waterline motion-drift" d="M125 137 C154 130 177 142 204 135 C223 131 238 132 249 136" />
      <path className="sketch-line sketch-craft-line" d="M134 127 C157 137 203 138 225 126" />
      <path className="sketch-line sketch-craft-line" d="M144 146 C164 155 194 155 215 146" />
      <path className="sketch-line sketch-craft-line" d="M134 164 C157 173 203 173 227 163" />
      <path className="sketch-line sketch-fine" d="M152 99 C146 126 147 153 155 179" />
      <path className="sketch-line sketch-fine" d="M207 100 C214 126 214 153 205 179" />
      <path className="sketch-line sketch-hatch" d="M113 103 C125 113 126 135 119 155" />
      <path className="sketch-line sketch-hatch" d="M240 103 C229 115 228 135 236 156" />
      <path className="sketch-line sketch-shadow" d="M129 176 C153 187 211 188 233 175" />
      <path className="sketch-line sketch-bronze" d="M91 187 C129 202 226 202 264 185" />
      <path className="sketch-line sketch-material" d="M154 65 C172 61 200 61 219 66" />
      <circle className="sketch-node" cx="278" cy="73" r="4" />
    </>
  );
}

function JadeStone() {
  return (
    <>
      <path className="sketch-fill sketch-fill-water" d="M70 184 C112 176 152 187 194 180 C235 174 274 181 310 170 L310 199 C236 213 146 211 70 202 Z" />
      <path className="sketch-fill sketch-stone" d="M78 159 C91 123 134 114 153 146 C171 178 133 203 101 193 C78 187 67 176 78 159 Z" />
      <path className="sketch-fill sketch-fill-wash" d="M172 132 C190 100 229 101 246 130 C266 166 222 195 190 178 C169 167 162 149 172 132 Z" />
      <path className="sketch-line sketch-stone-line" d="M94 156 C112 143 130 143 146 154" />
      <path className="sketch-line sketch-stone-line" d="M190 136 C208 126 227 128 242 141" />
      <path className="sketch-line sketch-stone-line" d="M105 134 L125 194" />
      <path className="sketch-line sketch-stone-line" d="M215 105 L199 181" />
      <path className="sketch-line sketch-hatch" d="M91 173 C111 164 132 168 148 181" />
      <path className="sketch-line sketch-hatch" d="M184 153 C205 143 228 146 250 162" />
      <path className="sketch-line sketch-hatch" d="M102 187 C121 180 138 182 151 191" />
      <path className="sketch-line sketch-hatch" d="M184 168 C203 159 227 162 240 174" />
      <path className="sketch-line sketch-shadow" d="M70 198 C113 211 238 211 286 194" />
      <path className="sketch-line sketch-plant" d="M269 183 C268 152 262 128 246 101" />
      <path className="sketch-line sketch-plant" d="M270 183 C284 153 291 132 289 101" />
      <path className="sketch-line sketch-plant" d="M270 183 C252 159 237 143 217 130" />
      <path className="sketch-line sketch-plant" d="M247 118 C258 113 264 112 273 116" />
      <path className="sketch-line sketch-plant" d="M287 120 C296 116 301 118 307 124" />
      <path className="sketch-line sketch-root" d="M266 183 C253 190 243 195 232 203" />
      <path className="sketch-line sketch-root" d="M271 183 C285 191 296 194 309 196" />
      <path className="sketch-line sketch-waterline motion-drift" d="M56 190 C103 181 147 194 195 185 C236 177 276 185 315 174" />
    </>
  );
}

function AquaticPlant() {
  return (
    <>
      <path className="sketch-fill sketch-fill-water" d="M72 152 C119 140 165 158 216 145 C255 137 288 145 315 134 L315 194 C235 204 153 196 72 204 Z" />
      <path className="sketch-line sketch-waterline motion-drift" d="M61 145 C105 134 148 154 189 144 C231 134 268 149 310 136" />
      <path className="sketch-line sketch-waterline motion-drift" d="M73 166 C116 158 157 170 201 161 C238 154 274 162 309 154" />
      <path className="sketch-line sketch-plant" d="M139 191 C138 161 132 130 119 98" />
      <path className="sketch-line sketch-plant" d="M142 191 C151 159 163 132 181 103" />
      <path className="sketch-line sketch-plant" d="M142 191 C119 164 102 143 91 113" />
      <path className="sketch-line sketch-plant" d="M143 191 C152 170 176 148 210 128" />
      <path className="sketch-line sketch-plant" d="M122 120 C135 116 144 118 153 127" />
      <path className="sketch-line sketch-plant" d="M169 122 C184 116 194 119 202 130" />
      <path className="sketch-line sketch-plant" d="M96 135 C108 131 117 134 124 144" />
      <path className="sketch-line sketch-plant" d="M110 150 C122 145 132 147 140 157" />
      <path className="sketch-line sketch-plant" d="M152 148 C164 142 174 144 183 155" />
      <path className="sketch-line sketch-plant" d="M224 190 C223 158 216 126 198 94" />
      <path className="sketch-line sketch-plant" d="M226 190 C240 158 250 132 252 101" />
      <path className="sketch-line sketch-plant" d="M225 190 C205 164 187 143 166 121" />
      <path className="sketch-line sketch-plant" d="M202 114 C215 110 225 114 232 126" />
      <path className="sketch-line sketch-plant" d="M249 126 C263 120 272 123 280 135" />
      <path className="sketch-line sketch-root" d="M142 190 C126 198 112 202 95 204" />
      <path className="sketch-line sketch-root" d="M224 190 C242 198 259 201 276 199" />
      <path className="sketch-line sketch-root" d="M183 188 C176 198 166 203 151 207" />
      <path className="sketch-line sketch-shadow" d="M112 200 C157 212 222 210 265 198" />
    </>
  );
}

function OrnamentalFish() {
  return (
    <>
      <path className="sketch-line sketch-waterline motion-drift" d="M62 132 C104 123 140 141 181 132 C225 122 259 139 309 127" />
      <path className="sketch-fill sketch-fish" d="M118 143 C151 105 205 104 238 142 C210 178 153 177 118 143 Z" />
      <path className="sketch-fill sketch-fill-wash" d="M136 142 C159 121 198 121 221 142 C199 162 158 163 136 142 Z" />
      <path className="sketch-line sketch-fish-line" d="M238 142 L284 115 C277 137 277 151 286 173 Z" />
      <path className="sketch-line sketch-fish-line" d="M239 142 L285 142" />
      <path className="sketch-line sketch-fish-line" d="M153 128 C172 140 198 140 217 128" />
      <path className="sketch-line sketch-fish-line" d="M158 158 C177 147 199 147 218 157" />
      <path className="sketch-line sketch-fish-line" d="M184 108 C192 125 192 160 184 176" />
      <path className="sketch-line sketch-fish-line" d="M205 113 C212 126 212 158 205 171" />
      <path className="sketch-line sketch-hatch" d="M160 135 C175 129 193 129 210 136" />
      <path className="sketch-line sketch-hatch" d="M162 150 C178 155 198 155 214 149" />
      <path className="sketch-line sketch-material" d="M170 106 C182 92 205 93 219 108" />
      <circle className="sketch-node" cx="146" cy="141" r="3" />
      <path className="sketch-line sketch-tech" d="M110 88 C161 72 224 75 279 93" />
      <circle className="sketch-node motion-pulse-subtle" cx="110" cy="88" r="4" />
      <circle className="sketch-node motion-pulse-subtle" cx="279" cy="93" r="4" />
    </>
  );
}

function EquipmentStudy() {
  return (
    <>
      <rect className="sketch-line sketch-equipment" x="94" y="78" width="72" height="104" rx="8" />
      <rect className="sketch-line sketch-equipment" x="198" y="70" width="76" height="118" rx="8" />
      <rect className="sketch-line sketch-fine" x="107" y="106" width="45" height="56" rx="4" />
      <rect className="sketch-line sketch-fine" x="213" y="101" width="45" height="62" rx="4" />
      <path className="sketch-line sketch-equipment-detail" d="M103 95 L157 95" />
      <path className="sketch-line sketch-equipment-detail" d="M207 89 L264 89" />
      <path className="sketch-line sketch-equipment-detail" d="M112 127 L148 127" />
      <path className="sketch-line sketch-equipment-detail" d="M218 118 L254 118" />
      <path className="sketch-line sketch-equipment-detail" d="M112 143 L148 143" />
      <path className="sketch-line sketch-equipment-detail" d="M218 137 L254 137" />
      <path className="sketch-line sketch-hatch" d="M112 166 L148 166" />
      <path className="sketch-line sketch-hatch" d="M218 169 L254 169" />
      <path className="sketch-line sketch-tech" d="M166 101 C184 101 184 99 198 99" />
      <path className="sketch-line sketch-tech" d="M166 148 C184 148 184 150 198 150" />
      <path className="sketch-line sketch-tech" d="M130 78 C133 58 150 53 169 60 C186 66 202 63 218 50" />
      <path className="sketch-line sketch-tech" d="M126 182 C128 203 156 204 159 183" />
      <path className="sketch-line sketch-tech" d="M236 188 C237 205 262 205 264 188" />
      <path className="sketch-line sketch-waterline motion-drift" d="M72 199 C119 191 163 202 211 194 C250 188 284 193 316 186" />
      <circle className="sketch-node motion-pulse-subtle" cx="129" cy="101" r="5" />
      <circle className="sketch-node" cx="236" cy="151" r="5" />
    </>
  );
}

function DecorativePieces() {
  return (
    <>
      <path className="sketch-line sketch-vessel" d="M110 93 C99 119 96 153 107 177 C122 197 174 195 187 177 C198 151 193 118 181 92 C161 102 132 103 110 93 Z" />
      <path className="sketch-fill sketch-fill-wash" d="M92 188 C128 174 166 174 198 188 C168 203 123 204 92 188 Z" />
      <path className="sketch-fill sketch-stone" d="M207 143 C221 112 260 112 274 142 C289 172 252 194 225 181 C206 172 200 157 207 143 Z" />
      <path className="sketch-line sketch-bronze" d="M73 197 C126 207 241 207 298 194" />
      <path className="sketch-line sketch-waterline motion-drift" d="M96 128 C127 119 158 136 187 126" />
      <path className="sketch-line sketch-stone-line" d="M221 144 C237 135 254 137 269 151" />
      <path className="sketch-line sketch-stone-line" d="M232 116 L240 186" />
      <path className="sketch-line sketch-stone-line" d="M212 158 L278 135" />
      <path className="sketch-line sketch-vessel-detail" d="M111 94 C132 84 160 84 181 92" />
      <path className="sketch-line sketch-vessel-detail" d="M110 119 C132 129 163 129 186 118" />
      <path className="sketch-line sketch-vessel-detail" d="M113 159 C132 168 162 168 181 159" />
      <path className="sketch-line sketch-hatch" d="M118 139 C134 145 158 145 177 138" />
      <path className="sketch-line sketch-hatch" d="M222 160 C237 152 254 154 267 166" />
      <path className="sketch-line sketch-shadow" d="M105 186 C132 195 164 195 188 184" />
      <circle className="sketch-node" cx="301" cy="88" r="4" />
    </>
  );
}

function AiPlatform() {
  return (
    <>
      <path className="sketch-line sketch-tech" d="M82 139 C119 100 156 116 184 137 C217 164 250 145 283 103" />
      <path className="sketch-line sketch-tech" d="M91 177 C132 154 166 160 197 178 C230 196 259 182 294 155" />
      <path className="sketch-line sketch-tech" d="M118 98 C151 83 197 89 231 116" />
      <path className="sketch-line sketch-tech" d="M133 201 C174 188 220 194 262 208" />
      <path className="sketch-line sketch-tech" d="M112 139 C139 147 164 151 197 178" />
      <path className="sketch-line sketch-tech" d="M184 137 C201 120 213 116 231 116" />
      <path className="sketch-line sketch-fine" d="M72 122 L112 122 L112 160" />
      <path className="sketch-line sketch-fine" d="M294 132 L318 132 L318 163" />
      <circle className="sketch-node motion-pulse-subtle" cx="82" cy="139" r="6" />
      <circle className="sketch-node" cx="184" cy="137" r="6" />
      <circle className="sketch-node motion-pulse-subtle" cx="283" cy="103" r="6" />
      <circle className="sketch-node" cx="91" cy="177" r="5" />
      <circle className="sketch-node motion-pulse-subtle" cx="197" cy="178" r="5" />
      <circle className="sketch-node" cx="294" cy="155" r="5" />
      <path className="sketch-fill sketch-fill-wash" d="M122 70 C154 54 209 54 239 72 C217 88 144 89 122 70 Z" />
      <path className="sketch-line sketch-vessel" d="M125 73 C135 96 145 112 180 114 C216 111 230 95 239 73" />
      <path className="sketch-line sketch-vessel-detail" d="M139 82 C163 91 200 91 225 82" />
      <path className="sketch-line sketch-vessel-detail" d="M147 98 C165 105 198 105 216 98" />
      <circle className="sketch-node" cx="231" cy="116" r="4" />
    </>
  );
}

function SpatialConsultation() {
  return (
    <>
      <path className="sketch-line sketch-diagram" d="M78 170 L286 170" />
      <path className="sketch-line sketch-diagram" d="M182 64 L182 205" />
      <path className="sketch-line sketch-diagram" d="M98 78 L263 78" />
      <path className="sketch-line sketch-diagram" d="M98 194 L263 194" />
      <path className="sketch-line sketch-diagram" d="M100 97 C143 80 222 81 263 99" />
      <path className="sketch-line sketch-diagram" d="M103 141 C149 129 220 130 259 143" />
      <path className="sketch-fill sketch-stone" d="M130 131 C145 104 184 105 196 132 C210 162 174 183 148 171 C130 162 122 148 130 131 Z" />
      <path className="sketch-line sketch-bronze" d="M222 91 C237 123 239 154 226 186" />
      <path className="sketch-line sketch-diagram" d="M119 79 L246 190" />
      <path className="sketch-line sketch-diagram" d="M246 80 L119 190" />
      <path className="sketch-line sketch-wash-line" d="M118 112 C144 103 169 104 193 114" />
      <path className="sketch-line sketch-wash-line" d="M174 158 C199 150 222 151 245 160" />
      <path className="sketch-line sketch-hatch" d="M143 137 C158 128 177 130 194 143" />
      <path className="sketch-line sketch-hatch" d="M143 151 C159 143 176 145 190 154" />
      <circle className="sketch-node" cx="182" cy="64" r="4" />
      <circle className="sketch-node motion-pulse-subtle" cx="286" cy="170" r="4" />
      <circle className="sketch-node" cx="78" cy="170" r="4" />
    </>
  );
}

function B2BNetwork() {
  return (
    <>
      <path className="sketch-line sketch-tech" d="M73 166 C114 123 142 117 179 145 C221 178 254 155 302 100" />
      <path className="sketch-line sketch-tech" d="M74 105 C120 125 154 106 188 84 C222 63 253 69 289 91" />
      <path className="sketch-line sketch-tech" d="M103 194 C145 166 193 164 240 181 C263 190 288 188 316 176" />
      <path className="sketch-line sketch-material" d="M116 76 C153 94 201 92 238 73" />
      <path className="sketch-line sketch-tech" d="M118 134 C145 118 161 111 188 84" />
      <path className="sketch-line sketch-tech" d="M179 145 C188 126 206 111 236 98" />
      <path className="sketch-line sketch-tech" d="M240 181 C253 160 274 134 302 100" />
      <path className="sketch-line sketch-fine" d="M86 80 L122 80 L122 116" />
      <path className="sketch-line sketch-fine" d="M292 78 L320 78 L320 114" />
      <circle className="sketch-node motion-pulse-subtle" cx="73" cy="166" r="6" />
      <circle className="sketch-node" cx="179" cy="145" r="6" />
      <circle className="sketch-node motion-pulse-subtle" cx="302" cy="100" r="6" />
      <circle className="sketch-node" cx="74" cy="105" r="5" />
      <circle className="sketch-node motion-pulse-subtle" cx="188" cy="84" r="5" />
      <circle className="sketch-node" cx="289" cy="91" r="5" />
      <path className="sketch-line sketch-waterline motion-drift" d="M84 197 C126 189 173 200 218 192 C254 187 282 190 316 181" />
    </>
  );
}

export function SketchMotif({ motif }: SketchMotifProps) {
  return (
    <svg className="sketch-motif" viewBox="0 0 360 240" aria-hidden="true" focusable="false">
      <DraftingGround />
      {motif === 'hero-water-vessel' ? <HeroWaterVessel /> : null}
      {motif === 'heritage-aquarium' ? <HeritageAquarium /> : null}
      {motif === 'jade-stone' ? <JadeStone /> : null}
      {motif === 'aquatic-plant' ? <AquaticPlant /> : null}
      {motif === 'ornamental-fish' ? <OrnamentalFish /> : null}
      {motif === 'equipment-study' ? <EquipmentStudy /> : null}
      {motif === 'decorative-pieces' ? <DecorativePieces /> : null}
      {motif === 'ai-platform' ? <AiPlatform /> : null}
      {motif === 'spatial-consultation' ? <SpatialConsultation /> : null}
      {motif === 'b2b-network' ? <B2BNetwork /> : null}
    </svg>
  );
}
