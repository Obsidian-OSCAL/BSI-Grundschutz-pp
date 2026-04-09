---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.11.1.1 Authentifizierung von geplanten Konversationen
parent_control: KONF.11.1 Authentifizierung vor dem Zugriff
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.11.1.1 - Authentifizierung von geplanten Konversationen
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.11 Vertrauensbeziehungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.11%20Vertrauensbeziehungen.md)
---

** Übergeordnetes Control: ** [KONF.11.1 Authentifizierung vor dem Zugriff](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.11.1%20Authentifizierung%20vor%20dem%20Zugriff.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Vertrauensbeziehungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.11%20Vertrauensbeziehungen.md) *** | TK-Anwendungen | SOLLTE | den Zugriff auf geplante Konversationen | im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement | authentifizieren | Konfigurationshistorie | >Konfiguration für TK-Anwendungen SOLLTE den Zugriff auf geplante Konversationen im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement authentifizieren.

> [!info]- Guidance
>Viele TK-Anwendungen bieten geplante Konversationen, z.B. in virtuellen Meeting-Räumen oder über Telefonkonferenzen, die über eine Rufnummer erreichbar sind. Wird der Zugriff hierauf nicht authentifiziert, so könnten unbemerkt Unberechtigte teilnehmen und Informationen abhören oder auf Meta-Informationen wie Teilnehmer oder Uhrzeiten zugreifen. Der Schutz kann z.B. durch Passwörter/PINs oder über die Anmeldung per Zertifikat oder Single-Sign-On geschehen. Die Formulierung "im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik Berechtigung (BER) festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 07493cf7-5071-4749-b58a-586016679f1e |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 07493cf7-5071-4749-b58a-586016679f1e |

> [!info]- Links> > related: [BER.1.1 Verfahren und Regelungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BER.1.1%20Verfahren%20und%20Regelungen.md)
