---
tags:
- Produktbeschreibung
- konf102-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.10.2 Kryptographische Verfahren in Anwendungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.10.2 - Kryptographische Verfahren in Anwendungen
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.10 Konfiguration von Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.10%20Konfiguration%20von%20Anwendungen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Konfiguration von Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.10%20Konfiguration%20von%20Anwendungen.md) *** | Anwendungen | SOLLTE | kryptographische Verfahren | nach {{anerkannten Standards}} im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement | aktivieren | Konfigurationshistorie | >Konfiguration für Anwendungen SOLLTE kryptographische Verfahren nach {{ insert: param, konf.10.2-prm1 }} im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement aktivieren.

> [!info]- Guidance
>Kryptographie wird für die Authentifizierung, Verschlüsselung und Integritätprüfung in Anwendungen verwendet, z.B. bei der Anmeldung an der Anwendung oder digitalen Signierung von Nachrichten. Die Formulierung "im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik Berechtigung (BER) festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Schlüsselmanagement zu finden ist. Anerkannte kryptographische Verfahren sind in der BSI TR-02102 zu finden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 94aac721-fbe3-44d0-a0ce-55ebded001ab |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 94aac721-fbe3-44d0-a0ce-55ebded001ab |

> [!info]- Links> > related: [BER.1.1 Verfahren und Regelungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/BER.1.1%20Verfahren%20und%20Regelungen.md)> > related: [KONF.14.1 Verschlüsselung beim Transport](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.14.1%20Verschlüsselung%20beim%20Transport.md)
