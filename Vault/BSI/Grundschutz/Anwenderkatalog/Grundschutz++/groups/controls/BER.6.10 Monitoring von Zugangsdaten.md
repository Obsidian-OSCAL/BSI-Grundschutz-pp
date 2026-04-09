---
tags:
- Credential_Stuffing_Password_Policy
- ber610-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.6.10 Monitoring von Zugangsdaten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.6.10 - Monitoring von Zugangsdaten
Tags: "[Credential Stuffing](tags_Credential Stuffing)" "[Password Policy](tags_Password Policy)"
Gruppe: [BER.6 Passwortgebrauch](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.6%20Passwortgebrauch.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Passwortgebrauch](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.6%20Passwortgebrauch.md) *** |  | SOLLTE | Zugangsdaten auf Kompromittierung | durch {{einen automatisierten Mechanismus}} | überwachen | Detektions-Konzept | >Berechtigung SOLLTE Zugangsdaten auf Kompromittierung durch {{ insert: param, ber.6.10-prm1 }} überwachen.

> [!info]- Guidance
>Eine Kompromittierung meint hier, dass Zugangsdaten wie Benutzername und Passwort (englisch: credentials) von Unbefugten eingesehen, abgefangen oder manipuliert wurden, sodass ein Missbrauch für unautorisierte Zugriffe möglich wird. Dies könnte etwa durch Leaks in Datenbanken, durch Phishing-Angriffe oder durch das Abfangen unverschlüsselter Übertragungen entstehen. Ein automatisierter Mechanismus bezeichnet hierbei eine technische Lösung, die ohne manuelles Zutun kontinuierlich prüft, ob bekannte Indikatoren einer Kompromittierung vorliegen (englisch: credential monitoring system). Geeignete Mechanismen können etwa Credential-Leak-Monitoring-Dienste, Data Breach Checker oder Darknet-Scanning-Tools sein. Der Zweck dieser Vorgabe liegt darin, dass ein frühzeitiges Erkennen von kompromittierten Zugangsdaten helfen kann, unautorisierte Logins und den Missbrauch sensibler Systeme zu verhindern; ohne eine solche Überwachung könnte ein Angreifer über lange Zeit unentdeckt mit gestohlenen Daten arbeiten und kritische Schäden verursachen. Ergeben sich hierbei Anzeichen auf eine Kompromittierung oder einen Leak der Zugangsdaten, so kann als Reaktion ein Wechsel der Zugangsdaten über einen nicht kompromittierten Kommunikationskanal veranlasst oder schlicht das betroffene Zugangskonto gesperrt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 4785649d-561d-4757-9421-4d0db14ee4df |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 4785649d-561d-4757-9421-4d0db14ee4df |
