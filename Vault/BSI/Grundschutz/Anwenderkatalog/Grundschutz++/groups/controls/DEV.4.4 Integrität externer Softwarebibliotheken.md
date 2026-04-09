---
tags: Secure_Compiling_Practices
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.4.4 Integrität externer Softwarebibliotheken
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.4.4 - Integrität externer Softwarebibliotheken
Tags: "[Secure Compiling Practices](tags_Secure Compiling Practices)"
Gruppe: [DEV.4 Softwareentwicklung - Code](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.4%20Softwareentwicklung%20-%20Code.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Entwicklung (DEV)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV%20Entwicklung.md)**<br> ***  &rarr; [Softwareentwicklung - Code](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DEV.4%20Softwareentwicklung%20-%20Code.md) *** | Anwendungen | SOLLTE | die Integrität externer Softwarebibliotheken | vor dem Release | testen | Freigabeplan | >Entwicklung für Anwendungen SOLLTE die Integrität externer Softwarebibliotheken vor dem Release testen.

> [!info]- Guidance
>Gemeint ist damit sowohl die technische Unversehrtheit (z. B. durch kryptografische Prüfungen wie Hash- oder Signaturvalidierung) als auch die inhaltliche Zuverlässigkeit (z. B. keine eingeschleusten Schadfunktionen oder versteckte Abhängigkeiten). Der Sinn und Zweck dieser Anforderung liegt darin, die Risiken durch unsichere oder manipulierte Fremdkomponenten zu reduzieren. So könnte ein Angreifer Schadcode in eine weit verbreitete Bibliothek einschleusen, die dann unbemerkt in der Anwendung landet, oder eine Abhängigkeit könnte im Hintergrund auf nicht mehr gepflegte Versionen verweisen. Eine wirksame Integritätsprüfung kann verhindern, dass fehlerhafte oder kompromittierte Bausteine in produktive Anwendungen gelangen und kann damit auch die Abhängigkeit von nicht vertrauenswürdigen Quellen abmildern. Zur Umsetzung können (1) Hashwerte oder digitale Signaturen von Bibliotheken mit den Referenzwerten der Hersteller verglichen werden, (2) der Bezug externer Pakete über offizielle, verifizierte Repositories, statt über inoffizielle Quellen stattfinden, und (3) in der Build-Pipeline eine automatisierte Integritätsprüfung eingerichtet sein, die verdächtige oder unvollständige Bibliotheken blockieret. Ergänzend kann eine institutionseigene Allowlist gepflegt werden, die geprüfte Versionen von Bibliotheken enthält, sodass Entwickler nicht unkontrolliert beliebige Abhängigkeiten einbinden. Ein praktischer Tipp kann sein, die Prüfmechanismen möglichst früh im Entwicklungsprozess zu automatisieren, um spätere manuelle Nacharbeiten oder Verzögerungen vor einem Release zu vermeiden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 62b75210-9470-456f-a191-9bbe48da5313 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 62b75210-9470-456f-a191-9bbe48da5313 |
