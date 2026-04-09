---
tags: Authentication_and_Authorization_Replay_Attacks_Session_Hijacking_Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.3.1 Replay-Angriffe
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.3.1 - Replay-Angriffe
Tags: "[Authentication and Authorization](tags_Authentication and Authorization)" "[Replay Attacks](tags_Replay Attacks)" "[Session Hijacking](tags_Session Hijacking)" "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [DEV.3 Softwareentwicklung - Härtung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.3%20Softwareentwicklung%20-%20Härtung.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Entwicklung (DEV)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV%20Entwicklung.md)**<br> ***  &rarr; [Softwareentwicklung - Härtung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.3%20Softwareentwicklung%20-%20Härtung.md) *** | Anwendungen | SOLLTE | Replay-Angriffe |  | blockieren | Freigabeplan | >Entwicklung für Anwendungen SOLLTE Replay-Angriffe blockieren.

> [!info]- Guidance
>Wenn die Anwendung Anfragen von anderen Anwendungen oder IT-Systemen entgegennimmt (z.B. per API), dann besteht die Gefahr, dass Angreifer eine vorherige Anfrage erneut verwenden um unbefugt Zugang zu erhalten. Maßnahmen können sein: (1) Identifikatoren, die nur einmal gültig sind (Nonce, Sequenznummern), (2) kryptographische Mechanismen wie MAC und Digitale Signaturen, Challenge-Response-Authentifizierung, OTP.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 2eeb41fa-2354-4ea3-a641-c7e5a33a3087 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 2eeb41fa-2354-4ea3-a641-c7e5a33a3087 |
