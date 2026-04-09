---
tags:
- Automatic_Session_Locking_Zero_Trust
- ber311-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.3.11 Systemsperre bei Inaktivität
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.3.11 - Systemsperre bei Inaktivität
Tags: "[Automatic Session Locking](tags_Automatic Session Locking)" "[Zero Trust](tags_Zero Trust)"
Gruppe: [BER.3 Zugangskonten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.3%20Zugangskonten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Zugangskonten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.3%20Zugangskonten.md) *** | IT-Systeme | SOLLTE | eine Sperre bei Inaktivität | nach {{einer Frist}} | aktivieren | Konfigurationshistorie | >Berechtigung für IT-Systeme SOLLTE eine Sperre bei Inaktivität nach {{ insert: param, ber.3.11-prm1 }} aktivieren.

> [!info]- Guidance
>Kann durch eine Bildschirmsperre oder Abmeldung (Automatic Session Locking) umgesetzt werden. Eine längere Inaktivität kann z.B. 5-15 Minuten lang sein. Verwendet das System keine eigene Authentifizierung, so ist auch diese Anforderung entbehrlich.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | de11e8f3-d1fa-4b11-a6b0-e0d327b42849 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | de11e8f3-d1fa-4b11-a6b0-e0d327b42849 |
