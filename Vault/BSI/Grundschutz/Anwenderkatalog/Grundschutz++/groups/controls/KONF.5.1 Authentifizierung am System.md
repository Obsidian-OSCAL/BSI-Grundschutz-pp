---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.5.1 Authentifizierung am System
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.5.1 - Authentifizierung am System
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.5 Authentifizierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.5%20Authentifizierung.md)
---

> [!info]- Untergeordnete Controls
> [KONF.5.1.1 Authentifizierung an der Firmware](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.5.1.1%20Authentifizierung%20an%20der%20Firmware.md)> [KONF.5.1.2 Pre-Boot-Authentifizierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.5.1.2%20Pre-Boot-Authentifizierung.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Authentifizierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.5%20Authentifizierung.md) *** | IT-Systeme | SOLLTE | den Zugriff auf das System | im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement | authentifizieren | Konfigurationshistorie | >Konfiguration für IT-Systeme SOLLTE den Zugriff auf das System im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement authentifizieren.

> [!info]- Guidance
>Betrifft sowohl die lokale Anmeldung über eine Benutzeroberfläche als auch den Zugriff über Fernwartungsprotokolle oder -anwendungen wie RDP, SNMP, wenn diese vorhanden sind.  Die Umsetzung erfolgt im einfachsten Fall durch einen Login, bzw. eine Bildschirmsperre für das IT-System. Biometrische Daten wie Fingerabdrücke können gefälscht werden und sind nicht so leicht zu ändern wie Passwörter. Setzen Sie Biometrie daher nicht als einzigen Authentifizierungsfaktor ein, sondern wenn, dann nur zur Ergänzung (Mehr-Faktor-Authentifizierung). Die Formulierung "im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik Berechtigung (BER) festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist. Die Anforderung ist entbehrlich, wenn das System keinen Zugriff auf schützenswerte Daten erlaubt, z.B. bei Nutzung als Kiosk.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | cc0d5002-8ef3-434c-b19f-15f0f226a6cb |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | cc0d5002-8ef3-434c-b19f-15f0f226a6cb |

> [!info]- Links> > related: [BER.1.1 Verfahren und Regelungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BER.1.1%20Verfahren%20und%20Regelungen.md)
